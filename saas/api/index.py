from fastapi import FastAPI
from openai import OpenAI
from fastapi.responses import PlainTextResponse

app = FastAPI()


@app.get("/api", response_class=PlainTextResponse)
def idea():
    client = OpenAI()
    prompt = [{"role": "user", "content": "Come up with a business idea for AI Agents"}]
    response = client.chat.completions.create(model="gpt-5-nano", messages=prompt)
    return response.choices[0].message.content
