import { useLoaderData } from "react-router-dom";

export default function MoviePage() {
  const pictures = useLoaderData();
  return (
    <section className="p-10 flex flex-col  justify-center">
      <div className="text-center">Gallery</div>
      <div className="flex flex-col w-full gap-5">
        {pictures.map((picture) => (
          <img src={picture.photo_url} alt={picture.caption} key={picture.id} />
        ))}
      </div>
    </section>
  );
}

export async function pictureLoader() {
  const response = await fetch("https://jsonfakery.com/photos/random/3");
  const resData = await response.json();
  return resData;
}
