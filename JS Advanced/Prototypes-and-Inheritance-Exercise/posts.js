function solution() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            const output = [`Post: ${this.title}`, `Content: ${this.content}`];

            return output.join('\n');
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            const rating = this.likes - this.dislikes;
            const socialOutput = [`Post: ${this.title}`, `Content: ${this.content}`, `Rating: ${rating}`];

            if (this.comments.length > 0) {
                socialOutput.push('Comments:');
                this.comments.forEach(comm => socialOutput.push(` * ${comm}`));
            }

            return socialOutput.join('\n');
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            const blogOutput = [`Post: ${this.title}`, `Content: ${this.content}`, `Views: ${this.views}`];

            return blogOutput.join('\n');
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    };

}

// const classes = solution();
// let post = new classes.Post("Post", "Content");

// console.log(post.toString());

// // Post: Post
// // Content: Content

// let scm = new classes.SocialMediaPost("TestTitle", "TestContent", 25, 30);

// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");

// console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

// let blog = new classes.BlogPost("TestTitle", "TestContent", 0);

// blog.view();
// blog.view();
// blog.view();
// blog.view();
// blog.view();
// blog.view();

// console.log(blog.toString());