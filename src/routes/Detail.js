import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  // useParms는 url에 있는 정보를 가져옴
  const { id } = useParams();

  const getDetail = async () => {
    const data = await (
      await fetch(`https://yts-proxy.now.sh/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(data);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
    </div>
  );
}

export default Detail;
