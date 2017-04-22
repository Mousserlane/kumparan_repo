import * as React from 'react';
import assert from 'assert';

import expect from 'expect';
import {renderIntoDocument} from 'react-addons-test-utils';
import Posts from '../Components/posts';
import {add, mul} from './calc';
import {renderShallow} from './test_helper';

import stefavatar from '../icons/avatar_stef.png';
//import Posts from '../Components/posts';

describe('Posts', () => {
var subject;
var posts;
var userData;

beforeEach(()=>{
  posts = {posts:[
    {id: 1, postedBy: "Stefani Aulia", postedat:"Senin, 23 Juli 2016 - 13:00", linked: true, content:"Untuk pertama kalinya musisi Indonesia berhasil masuk dalam ajang penghargaan Musik tertinggi di Amerika Serikat, Grammy Awards. Untuk peIndonesia berhasil masuk dalam ajang penghargaan Musiards. Untuk Pertama kalinya musisi Indonesia berhasil masuk dalam ajang penghargaan Musik tertinggi di Amerika Serikat, Grammy Awards"}
  ]}
  userData = {id: 1, name: "Stefani Aulia", useravatar: stefavatar};
  subject = renderShallow(<Posts PostData={posts} userData={userData}/>);
});
it('should return posts', () => {
  console.log(subject);
})
  // it('should render', () => {
  //   const item = renderIntoDocument(
  //     <Posts />
  //   );
  //
  //   expect(item).toExist();
    // assert(add(1,1), 3)
  //})
})
