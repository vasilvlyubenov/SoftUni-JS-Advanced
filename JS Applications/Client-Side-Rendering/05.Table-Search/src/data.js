export async function getData() {
    try {
        const response = await fetch('http://localhost:3030/jsonstore/advanced/table');

        if (!response.ok) {
            throw response.json();
        }

        return response.json();
    } catch (error) {
        throw error.message;
    }
}