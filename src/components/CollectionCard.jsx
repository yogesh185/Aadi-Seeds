export default function CollectionCard({ collection }) {
  return (
    <div className="card card-hover flex flex-col items-center p-4">
      <img src={collection.image} alt={collection.name} className="w-full h-28 object-cover rounded mb-2" />
      <div className="font-medium">{collection.name}</div>
    </div>
  );
}
