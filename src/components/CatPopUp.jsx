import styled from "styled-components";

const CatPopUp = ({
  category,
  popup,
  setSelectedCategory,
  selectedCategory,
}) => {
  return (
    <Container popup={popup}>
      {category.map((item, index) => (
        <div
          key={item.id}
          style={{ backgroundColor: `${item?.background_color}` }}
        >
          <h1 style={{ color: `${item?.text_color}` }}>{item?.title}</h1>
        </div>
      ))}
    </Container>
  );
};

export default CatPopUp;

const Container = styled.div`
  width: 288px;
  height: 144px;
  padding: 16px;
  display: ${(p) => (p.popup ? "flex" : "none")};
  flex-wrap: wrap;
  gap: 8px;
  position: absolute;
  background-color: #fff;
  left: 0;
  top: 48px;
  border-radius: 12px;
  border: 1px solid #e4e3eb;
  box-shadow: 2px 4px 8px 0px rgba(0, 0, 0, 0.08);
  overflow-y: scroll;

  div {
    padding: 8px 16px;
    border-radius: 30px;
    height: 32px;
  }

  h1 {
    width: max-content;
    font-family: FiraGO;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
`;
