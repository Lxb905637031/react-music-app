import React from 'react'; 

import LxbDiscover from '@/pages/discover';
import LxbRecommend from "@/pages/discover/c-pages/recommend";
import LxbRanking from "@/pages/discover/c-pages/ranking";
import LxbSongs from "@/pages/discover/c-pages/songs";
import LxbDjradio from "@/pages/discover/c-pages/djradio";
import LxbArtist from "@/pages/discover/c-pages/artist";
import LxbAlbum from "@/pages/discover/c-pages/album";

import LxbFriend from '@/pages/friend';
import LxbMine from '@/pages/mine';

import { Redirect } from 'react-router-dom'

const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    )
  },
  {
    path: "/discover",
    component: LxbDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: '/discover/recommend',
        component: LxbRecommend
      },
      {
        path: '/discover/ranking',
        component: LxbRanking
      },
      {
        path: '/discover/songs',
        component: LxbSongs
      },
      {
        path: '/discover/djradio',
        component: LxbDjradio
      },
      {
        path: '/discover/artist',
        component: LxbArtist
      },
      {
        path: '/discover/album',
        component: LxbAlbum
      }
    ]
  },
  {
    path: "/friend",
    component: LxbFriend,
  },
  {
    path: "/mine",
    component: LxbMine,
  },
];

export default routes