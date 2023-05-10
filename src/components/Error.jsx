export const Error = ({ mensaje }) => {
  return (

    // Si algun campo  en el Form no esta lleno muestra este mensaje
    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
      <p>{mensaje}</p>
    </div>
  );
};
