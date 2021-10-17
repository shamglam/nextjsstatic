import Head from 'next/head'
import axios from 'axios';
import Link from 'next/link'

import { GetStaticProps } from 'next'

async function foo() {
    return await axios.get("https://jsonplaceholder.typicode.com/posts")
}


export const getStaticProps: GetStaticProps = async (context) => {
  let b = await foo();
  
    return {
        props: {
            a: b.data
        }
    };
};

export default   function ({a}: {a: any}){


//     let data = await foo();
// console.log(data);



    return (<div>
        
        <Head>
             <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="crossOrigin" />
<link href="https://fonts.googleapis.com/css2?family=Festive&display=swap" rel="stylesheet" />
            </Head>
        
        <ul>
        {a.map ( (item:any) => <li><h2><Link href={"/reviews/" + item.id}><a> {item.title}</a></Link></h2> {item.body}</li> )  }
        </ul>
        <pre>

        {JSON.stringify(a, null, 2)}
        </pre>
    </div>);
}

