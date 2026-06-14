"use server";

export async function getRequest() {
    try {
        const res = await fetch("http://localhost:4000");
        if (!res.ok) {
            return { success: false, message: "Failed to send get request" };
        }

        const parsed = await res.json();
        return parsed;
    } catch (e) {
        console.error("Something went wrong", e);
        return { success: false, message: "Failed to send get request" };
    }
}
