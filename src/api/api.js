import request from '@/utils/request'
import { useTokenStore } from '@/stores'
import axios from 'axios'

const tokenStore = useTokenStore()

// 获取密钥
export const getPublickey = () => request.post('/auth/manage/getKey')

// 登录接口
export const userLoginService = (data) =>
  request.post('/auth/manage/passwordLogin', data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })

// 退出登录接口
export const userLogoffService = () => request.post('/auth/manage/logout')

//首页数据展示
export const showData = () => {
  return request.post('/tag/manage/count', '', {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })
}

//展示帖子 详情
export const showPostDetail = (id) => {
  return request.get(`/post/list/${id}`, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })
}
// 罗列帖子
export const showPost = (data) => {
  return request.post('/post/manage/list', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })
}

// 删除帖子
export const deletePost = (data) =>
  request.post('/post/manage/delete', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })

// 删除评论
export const deleteComment = (data) =>
  request.post('/comment/manage/delete', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })

// 罗列对于帖子评论
export const postComment = (data) =>
  request.post(
    `/comment/list?pageNum=${data.pageNum}&pageSize=${data.pageSize}&postId=${data.postId}`,
    {
      headers: {
        access_token: tokenStore.accessToken,
        'Content-Type': 'application/json'
      }
    }
  )
//罗列子评论
export const SonComment = (data) =>
  request.post(
    `/comment/get?commentId=${data.commentId}&pageSize=${data.pageSize}&pageNum=${data.pageNum}`,
    {
      headers: {
        access_token: tokenStore.accessToken,
        'Content-Type': 'application/json'
      }
    }
  )
// 罗列目前用户
export const postUser = (data) =>
  request.post('/user/manage/userList', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })

// 重置用户密码
export const resetPasserword = (data) =>
  request.post('/user/manage/resetPassword', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })

// 用户封禁
export const banUser = (data) =>
  request.post('/user/manage/status/change', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })

// 用户解禁
export const releaseUser = (data) =>
  request.post('/user/manage/status/change', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })

// 添加管理员
export const addAdmin = (data) =>
  request.post('/user/manage/administrator', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })
//删除管理员
export const delAdmin = (data) =>
  request.post('/user/manage/administrator', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })
// 获取标签
export const getTags = () => request.get('/tag/list')

// 新增标签
export const addTag = (data) =>
  request.post('/tag/manage/add', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })

// 删除标签
export const deleteTag = (data) =>
  request.post('/tag/manage/delete', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })

// 获取轮播图列表
export const getSwipers = () => request.get('/static/rotatingPic')

// 新增轮播图
export const addSwiper = (data) =>
  request.post('/static/manage/rotatingPic/add', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })

// 删除轮播图
export const deleteSwiper = (data) =>
  request.post('/static/manage/rotatingPic/delete', data, {
    headers: {
      access_token: tokenStore.accessToken,
      'Content-Type': 'application/json'
    }
  })

// 上传图片
export const getImgUrl = (data) =>
  axios.post('http://8.146.208.139:10010/upload', data)
