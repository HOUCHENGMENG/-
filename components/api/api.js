class Api {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async getPosts() {
        const response = await fetch(`${this.baseUrl}/posts`);
        return response.json();
    }
    async publishPost(content) {
        const response = await fetch(`${this.baseUrl}/posts`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                content,
            }),
        });
        return response.json();
    }
    async editPosts(postId, content) {
        const response = await fetch(`${this.baseUrl}/posts/${postId}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                content,
            }),
        });
        return response.json();
    }
    async deletePosts(postId) {
        const response = await fetch(`${this.baseUrl}/posts/${postId}`, {
            method: "DELETE",
        });
        return response.json();
    }
}
