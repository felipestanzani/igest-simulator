export default function Legend() {
  return (
    <div className="flex flex-row gap-1">
      <span className="w-18 h-6 p-1 bg-blue-100 text-blue-800 text-xs flex items-center justify-center rounded-md">
        1º Quartil
      </span>
      <span className="w-18 h-6 p-1 bg-green-100 text-green-800 text-xs flex items-center justify-center rounded-md">
        2º Quartil
      </span>
      <span className="w-18 h-6 p-1 bg-amber-100 text-amber-800 text-xs flex items-center justify-center rounded-md">
        3º Quartil
      </span>
      <span className="w-18 h-6 p-1 bg-red-100 text-red-800 text-xs flex items-center justify-center rounded-md">
        4º Quartil
      </span>
    </div>
  );
}
