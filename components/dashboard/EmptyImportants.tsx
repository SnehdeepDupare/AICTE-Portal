import Image from "next/image";

export default function EmptyImportants() {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image
        src="/assets/empty-importants.svg"
        height={140}
        width={140}
        alt="Empty"
      />
      <h2 className="text-2xl font-semibold mt-6">No Important boards!</h2>
      <p className="text-muted-foreground textg-sm mt-2">
        Try adding a board to Importants
      </p>
    </div>
  );
}
