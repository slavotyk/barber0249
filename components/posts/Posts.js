import {useEffect, useState} from 'react';
import { collection, getDocs } from 'firebase/firestore';
import {db} from "../../firebase/initFirebase";


const Posts = () => {
    const [ posts, setPosts] = useState();

    // basic example
    useEffect(() => {
        const colRef = collection(db, 'posts')
        getDocs(colRef)
            .then((data) => {
                const result = [];
                data.docs.forEach((doc) => {
                    result.push({ ...doc.data(), id: doc.id})
                })
                setPosts(data);
            })
    })

    return (
        <div>
            1
        </div>
    );
};

export default Posts;