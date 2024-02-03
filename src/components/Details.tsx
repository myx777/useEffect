import { useEffect, useState } from "react";
import { DetailProps } from "./types/detailProps";

/**
 * Загружает и отображает детали для указанного идентификатора.
 *
 * @param {number} id - Идентификатор, для которого нужно загрузить детали
 * @return {JSX.Element} JSX элемент, отображающий детали
 */
const Details = ({ id }: { id: number }) => {
  const [detail, setDetail] = useState<DetailProps>();

  useEffect(() => {
    let ignore = false;
    setDetail(undefined);
    const fetchData = async () => {
      console.info(`Loading....`);

      try {
        const url = `./data/${id}.json`;
        const response = await fetch(url);
        const data = await response.json();

        setDetail(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();

    return () => {
      ignore = true;
      console.info(`Unmounting....`);
    };
  }, [id]);

  return (
    <div className="details">
      {detail && (
        <>
          <h1>{detail.name}</h1>
          <img src={detail.avatar} alt={detail.name} />
          <p>{detail.details.city}</p>
          <p>{detail.details.company}</p>
          <p>{detail.details.position}</p>
        </>
      )}
    </div>
  );
};

export default Details;
