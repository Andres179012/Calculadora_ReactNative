import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 20,
  },
  calculadoraContainer: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'flex-end',
  },
  resultado: {
    color: 'white',
    fontSize: 70,
    textAlign: 'right',
    marginBottom:25,
  },
  historial: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 40,
    textAlign: 'right',
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  boton: {
    height: 70,
    width: 70,
    backgroundColor: '#2D2D2D',
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 14,
  },
  botonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 32,
    fontWeight: 'bold',
  },
});
