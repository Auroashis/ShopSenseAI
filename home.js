const Home = () =>{
    const [lis,setLis] = useState([]);
    const call = async () => {
        try {
            const res = await fetch('/api/web_data',{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                }
            });
            const data = await res.json();
            setLis(data); 
            if(!res.status===400){
                throw new Error(res.error);
            }
        } catch (error) {
                console.log(error);
        }
    }

    useEffect(() => {
      call();
    },[])}