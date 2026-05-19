"""
AI чат-бот для подростков. Отвечает на лёгкие вопросы о правах, советах и помощи. v2
"""
import json
import os
import urllib.request


SYSTEM_PROMPT = """Ты — дружелюбный помощник на сайте ГБУ ЦССВ «Алые паруса». 
Ты помогаешь подросткам находить ответы на вопросы о своих правах, о том, как справляться с трудностями, куда обратиться за помощью.

Правила:
- Общайся просто, без сложных слов, как с другом
- Не осуждай, не читай нотации
- Если вопрос о насилии, угрозе жизни или суициде — СРАЗУ дай телефон доверия: 8-800-2000-122 и номер экстренных служб: 112
- Если вопрос юридически сложный — объясни суть и посоветуй обратиться в органы опеки или к юристу
- Отвечай кратко — максимум 3-4 предложения
- Если не знаешь ответа — честно скажи и направь к специалисту
- Ты НЕ психолог и НЕ юрист — всегда уточняй это при серьёзных вопросах
- Отвечай только на русском языке"""


def handler(event: dict, context) -> dict:
    """Обрабатывает сообщение пользователя и возвращает ответ AI."""

    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    messages = body.get("messages", [])

    if not messages:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "Нет сообщений"}),
        }

    api_key = os.environ["OPENAI_API_KEY"]

    payload = json.dumps({
        "model": "gpt-4o-mini",
        "messages": [{"role": "system", "content": SYSTEM_PROMPT}] + messages,
        "max_tokens": 400,
        "temperature": 0.7,
    }).encode("utf-8")

    req = urllib.request.Request(
        "https://api.openai.com/v1/chat/completions",
        data=payload,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    with urllib.request.urlopen(req) as resp:
        result = json.loads(resp.read().decode("utf-8"))

    reply = result["choices"][0]["message"]["content"]

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"reply": reply}),
    }