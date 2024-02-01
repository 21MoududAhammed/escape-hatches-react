import { useRef } from "react";

export default function LatestCatFriends() {
  const catsRef = useRef(null);
  function scrolltoId(id){
    const node = catsRef.current.get(id);
    node.scrollIntoView({
        behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
    })
  }

  function getMap() {
    if (!catsRef.current) {
        catsRef.current = new Map();
    }
    return catsRef.current;
  }

  return (
    <>
      <nav>
        <button onClick={()=> scrolltoId(0)}>Tom</button>
        <button onClick={()=> scrolltoId(5)}>Maru</button>
        <button onClick={()=> scrolltoId(9)}>Jellorum</button>
      </nav>
      <div>
        <ul>
          {catList.map((cat) => {
            return (
              <li
                key={cat.id}
                ref={(node) => {
                   getMap().set(cat.id, node);
                }}
              >
                <img src={cat.imageUrl} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

const catList = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "https://placekitten.com/250/200?image=" + i,
  });
}
