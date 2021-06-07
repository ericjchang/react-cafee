import React from 'react'
import Gojek from '../../images/gojek.png'
import Grab from '../../images/grab.png'
import Shopee from '../../images/shopee.png'
import {
  DeliveriesContainer,
  DeliveriesH1,
  DeliveriesWrapper,
  DeliveriesCard,
  DeliveriesIcon,
  DeliveriesH2,
  DeliveriesP
} from './DeliveriesElements';

const Deliveries = () => {
  return (
    <DeliveriesContainer id="deliveries">
      <DeliveriesH1>Deliveries</DeliveriesH1>
      <DeliveriesWrapper>
        <DeliveriesCard>
          <DeliveriesIcon src={Gojek} />
          <DeliveriesH2>GoFood</DeliveriesH2>
          <DeliveriesP>dolor sit amet, consectetur adipiscing elit. Aenean ornare justo mauris</DeliveriesP>
        </DeliveriesCard>
        <DeliveriesCard>
          <DeliveriesIcon src={Grab} />
          <DeliveriesH2>Grab Food</DeliveriesH2>
          <DeliveriesP>Fusce egestas pharetra urna, sit amet mattis felis vehicula ut.</DeliveriesP>
        </DeliveriesCard>
        <DeliveriesCard>
          <DeliveriesIcon src={Shopee} />
          <DeliveriesH2>ShopeeFood</DeliveriesH2>
          <DeliveriesP>Sed vulputate, diam et ullamcorper cursus, felis nunc ultrices lorem.</DeliveriesP>
        </DeliveriesCard>
      </DeliveriesWrapper>
    </DeliveriesContainer>
  )
}

export default Deliveries
