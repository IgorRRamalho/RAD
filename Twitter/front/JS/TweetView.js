class TweetView {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    render() {
        return `
        <div class="card mb-12">
            <div class="row g-0">
                <div class="col-md-10">
                    <div class="card-body">
                    <h5 class="card-title">${this.title}</h5>
                    <p class="card-text">${this.description}</p>
                    <p class="card-text"><small class="text-body-secondary">Tweet de Diogo Soares<button class="follow">Follow</button></small></p>
                    </div>
                </div>
            </div>
        </div>
        `; 
    }
}
