import React from 'react';
import styled from 'styled-components';
import { CustomCardProps, AdvancedUIItemCard, Tool } from 'photoeditorsdk';

const Container = styled.div`
  margin-bottom: 10px;
  &:nth-child(2n + 1) {
    margin-right: ${props =>
      props.theme.measurements.advancedUISpacer}px !important;
  }
`;

const CardStyles = styled(AdvancedUIItemCard).attrs(props => {
  const style = { ...props.style };
  if (props.tool === Tool.FRAME) {
    style.backgroundSize = '55%';
  }
  if (props.image) {
    style.backgroundImage = `url(${props.image})`;
  }
  if (props.isActive) {
    style.border = `2px solid ${props.theme.primary}`;
  }
  return { style };
})`
  height: 87px;
  width: 87px;
  padding: 5px;
  border-radius: 50%;
  margin-right: 0px !important;
  background-position: center center;
  background-repeat: no-repeat;
  background-clip: content-box;
`;

const Label = styled.div`
  max-width: 80px;
  text-align: center;
  font-size: 12px;
  margin-bottom: 10px;
`;

export const ItemCard: React.FC<CustomCardProps> = ({
  label,
  children,
  ...props
}) => {
  return (
    <Container>
      <CardStyles {...props} label={label} />
      <Label>{label}</Label>
    </Container>
  );
};
