import PrintDocument from "@/components/PrintDocument";

function ViewDoc({
  params: { document_id },
}: {
  params: { document_id: string };
}) {
  return (
    <div className="my-5">
      <PrintDocument document_id={document_id} />
    </div>
  );
}

export default ViewDoc;
