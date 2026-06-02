export default async function getRecipeFromGroq(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")

    try {
        const response = await fetch(
            "https://api.groq.com/openai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    model: "llama-3.1-8b-instant", // ✅ working chat model
                    messages: [
                        {
                            role: "system",
                            content: "You are a helpful chef. Return recipes in markdown."
                        },
                        {
                            role: "user",
                            content: `I have ${ingredientsString}. Suggest a recipe I can make.`
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 500
                })
            }
        )

        const data = await response.json()

        console.log("Response:", data)

        if (!response.ok) {
            console.error("Groq API Error:", data)
            throw new Error(data?.error?.message || "API error")
        }

        return data.choices[0].message.content

    } catch (err) {
        console.error("ERROR:", err)
        return err.message || "Failed to fetch recipe"
    }
}