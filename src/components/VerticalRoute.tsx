import { useParams } from "react-router-dom";

function VerticalRoute() {
  const { id } = useParams();

  const vertical = verticals.find(v => v.id === id);

  if (!vertical) {
    return <div>Vertical not found</div>;
  }

  return (
    <VerticalPage
      vertical={vertical}
      onBack={() => window.history.back()}
      onProjectClick={() => {}}
    />
  );
}

export default VerticalRoute;