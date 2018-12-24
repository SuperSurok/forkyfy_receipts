export default class LIkes {
    constructor() {
        this.likes = [];
    }

    addLIke(id, title, author, img){
        const like = {id, title, author, img};
        this.likes.push(like);
        return like;
    }

    deleteLike(id){
        const index = this.likes.findIndex(el =>el.id === id);
        // [2, 4, 8] splice (1, 2) ---> returns [4, 8], original array is [2]
        // [2, 4, 8] slice (1, 2) ---> returns [4], original array is [2, 4, 8]
        this.likes.splice(index, 1)
    }

    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }

    getLikes(){
        return this.likes.length;
    }
}