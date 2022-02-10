import React,{useState, useEffect} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { database } from '../firebase';

/*
1. In Post.js humne posts[accessed through database.posts] ko most recent posted post ke hisaab se sort krke "postArr" mein daal diya.
2. Then humne usse "posts" mein save kra ke uspe ".map" chlaya & hr post[video] ko display kraya and uske andar Avatar & LikeComponent de diya.
3. Then LikeComponent mein humnein User[Jisne Login kiya hai uska cloudFirestore wala Object] and Post["Sirf ek" Video/post jo abhi traverse kri hai in cloudFirestore uska Object] as "props" bheje hain.
4. Then Like.js mein bheji hui Post/Video obj mein "likes" arr [usemin wo "userId" hongi jinhone us video/post ko like kiya hai] mein check krenge ki "user"[jisse se humnei login kiya hai] kya usne is video/post ko like kiya hai agr hai to "like" ko true set krdo.
5. "handleLike" Like icon pe jb bhi click hoga tb chlega & humne ye isliye likha hai taaki hum post/Video like/dislike kr ske.
6. Ismein humnein ye kiya ki agr Post/Video pe pehle se liye hai to,
    (i) hum , arrays.filter() krenge jo  ek nya array bnayega jismein wo wale users honge jinki id humare loggedIn kiye hue user ki Id se na match krte honge and uske baad us post/Video ke likes array ko update kr denge.
    (ii) else ,  us post/Video ke likes array mien logged in user ki Id daaldenge and us post ke likes array ko update kr denge.
*/
function Like({userData, postData}){
    const [like, setLike] = useState(null);

    useEffect(()=>{
        let check = postData.likes.includes(userData.userId)? true:false
        console.log(check);
        setLike(check);
    },[postData]);

    const handleLike = () => {
        if(like == true){
            let narr = postData.likes.filter((el)=>el!=userData.userId);
            console.log(narr);
            database.posts.doc(postData.postId).update({
                likes : narr
            })  
        }else{
            let narr = [...postData.likes, userData.userId];
            database.posts.doc(postData.postId).update({
                likes : narr
            })
        }
    }

    return(
        <div>
            {
                like!=null?
                <>
                    {
                        like == true ? <FavoriteIcon className={`icon-styling like`} onClick={handleLike}/> : <FavoriteIcon className={`icon-styling unlike`} onClick={handleLike}/>
                    }
                </>:
                <></>
            }
        </div>
    );
}

export default Like;