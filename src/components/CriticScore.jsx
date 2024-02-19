import { Badge } from '@chakra-ui/react'

const CriticScore = ({score}) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : ''
  
    return (
      <Badge colorScheme={color} fontSize="14px" paddingX="5px" borderRadius="5px">
        {score}{" "}
      </Badge>
    );
}

export default CriticScore