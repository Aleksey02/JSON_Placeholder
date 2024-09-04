import { defineStore } from 'pinia'
import axios from 'axios'

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface State {
  allPosts: Post[];
  posts: Post[];
  loading: boolean;
  page: number;
  totalPages: number;
  showModal: boolean;
  orderingById: boolean;
  currentUserId: number;
}

// Определение хранилища
export const usePostsStore = defineStore('posts', {
  state: (): State => ({
    allPosts: [],
    posts: [],
    loading: true,
    page: 1,
    totalPages: 0,
    showModal: false,
    orderingById: true,
    currentUserId: 0
  }),
  actions: {
    async fetchAllPosts(): Promise<void> {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        this.allPosts = response.data;
        this.totalPages = Math.ceil(this.allPosts.length / 10);
        this.updatePosts();
      } catch {
        alert('Ошибка при загрузке постов');
      } finally {
        this.loading = false;
      }
    },
    updatePosts(): void {
      const start = (this.page - 1) * 10;
      const end = start + 10;
      this.posts = this.allPosts.slice(start, end);
    },
    
    addPost(title: string, body: string): void {
      let userId = this.currentUserId == 0 ? this.allPosts.slice().sort((a, b) => b.userId - a.userId)[0].userId + 1 : this.currentUserId;
      let lastPostId = this.allPosts.slice().sort((a, b) => b.id - a.id)[0].id;
      let post = { 
        id: lastPostId+1,
        userId, 
        title, 
        body 
      };
      if(this.orderingById){
        this.allPosts.push(post);
      }else{
        this.allPosts.unshift(post);
      }
      this.currentUserId = userId;
      this.updatePosts();
      this.totalPages = Math.ceil(this.allPosts.length / 10);
    },
    sortPosts(): void {
      this.orderingById = !this.orderingById;
      if (this.orderingById) {
        this.allPosts.sort((a, b) => a.id - b.id);
      } else {
        this.allPosts.sort((a, b) => b.id - a.id);
      }
      this.updatePosts();
    },
    toggleModal(): void {
      this.showModal = !this.showModal;
    },
    startLoading(): void {
      this.loading = true;
    },
    endLoading(): void {
      this.loading = false;
    },
    incrementPage(): void {
      this.page++;
    },
    decrementPage(): void {
      this.page--;
    }
  },
  getters: {
    getPosts: (state): Post[] => state.posts,
    getLoading: (state): boolean => state.loading,
    getCurrentPage: (state): number => state.page,
    getTotalPages: (state): number => state.totalPages,
    isModalOpen: (state): boolean => state.showModal
  }

})
