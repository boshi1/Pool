import React from 'react';

import {View} from 'react-native';
interface Props {
  Text: String;
}
const Images: React.FC<Props> = Props => {
  const images = {
    br: require('./assets/br.png'),
    bn: require('./assets/bn.png'),
    bb: require('./assets/bb.png'),
    bq: require('./assets/bq.png'),
    bk: require('./assets/bk.png'),
    wp: require('./assets/wp.png'),
    wr: require('./assets/wr.png'),
    wn: require('./assets/wn.png'),
    wb: require('./assets/wb.png'),
    wq: require('./assets/wq.png'),
    wk: require('./assets/wk.png'),
  };

  const [Pciked, setKey] = React.useState<number>(0);
  return <View style={{width: 100, height: 100, backgroundColor: 'green'}} />;
};
export default Images;
