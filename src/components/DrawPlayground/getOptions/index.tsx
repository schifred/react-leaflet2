import { Control } from 'leaflet';
import getDrawOptions from './draw';
import getEditOptions from './edit';

export default function getOptions({
  draw,
  edit,
}: Pick<Control.DrawConstructorOptions, 'draw' | 'edit'>) {
  return {
    draw: getDrawOptions(draw),
    edit: getEditOptions(edit),
  };
}
