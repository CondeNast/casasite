export async function getStaticProps(context) {
    const res = await fetch(`stubbedAD-100-2021.json`)
    const data = await res.json();
    console.log(data);
  
    if (!data) {
      return {
        notFound: true,
      }
    }
  
    return {
      props: { data }, // will be passed to the page component as props
    }
  }
  export defaultgetStaticProps();