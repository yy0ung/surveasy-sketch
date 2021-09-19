import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Notice from '../views/Notice.vue'
import Login from '../components/Login.vue'
import Post from '../views/Post.vue'
import noticeDetail from '../components/NoticeDetail.vue'
import noticeList from '../components/NoticeList.vue'
import postDetail from '../components/PostDetail.vue'
import postList from '../components/PostList.vue'
import Upload from '../views/Upload.vue'
import Cal from '../components/Cal.vue'
import UploadPage from '../components/UploadPage.vue'
import getPoint from '../components/Point.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/notice',
    name: 'Notice',
    component: Notice
  },
  {
    path: '/post',
    name: 'Post',
    component: Post
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    props: true
  },
  {
    path: '/noticedetail/:id',
    name: 'noticeDetail',
    component: noticeDetail,
    props: true
  },
  {
    path: '/noticeList',
    name: 'noticeList',
    component: noticeList,
    props: true
  },
  {
    path: '/postdetail/:id',
    name: 'postDetail',
    component: postDetail,
    props: true
  },
  {
    path: '/postList',
    name: 'postList',
    component: postList,
    props: true
  },
  {
    path: '/upload',
    name: 'Upload',
    component: Upload,
  },
  {
    path: '/cal',
    name: 'Cal',
    component: Cal,
  },
  {
    path: '/uploadpage',
    name: 'UploadPage',
    component: UploadPage,
  },
  {
    path: '/getpoint/:id',
    name: 'getPoint',
    component: getPoint,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router