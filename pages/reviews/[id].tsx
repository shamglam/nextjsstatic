import { useRouter } from 'next/router'


import { GetStaticProps } from 'next'
import axios from 'axios';
async function foo(id:string) {
   
  
    return await axios.get("https://jsonplaceholder.typicode.com/posts/" + id);
    
}


export async function getStaticPaths() {

    let {data}:{data:any}= await axios.get("https://jsonplaceholder.typicode.com/posts");
  return (
      {
        paths: data.map( (item:any)=> {
            
            return {params: {id: '' + item.id}}
        }),
        fallback: false });
}

export const getStaticProps: GetStaticProps = async (context:any) => {
  
    const id = context.params.id;

    let b = await foo(id);
    
      return {
          props: {
              a: b.data
          }
      };
  };


const Review = ({a}:{a:any}) => {

    return (<><h2>{a.title}</h2>
            {a.body}
            </>
    );
  }



export default Review