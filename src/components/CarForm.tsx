
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseVin, chooseYear, chooseMake, chooseModel, chooseColor } from "../redux/slices/RootSlice"

interface CarFormProps {
  vin?: string[];
  onClose: () => void;
}

const CarForm = ( props:CarFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`VIN: ${typeof props.vin}`);
    console.log(props.vin)
    console.log(data)
    if (props.vin && props.vin.length > 0) {
      server_calls.update(props.vin[0], data)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseVin(data.vin));
      dispatch(chooseYear(data.year));
      dispatch(chooseModel(data.make));
      dispatch(chooseMake(data.model));
      dispatch(chooseColor(data.color));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="vin">VIN Number</label>
          <Input {...register('vin')} name='vin' placeholder="VIN" />
        </div>
        <div>
          <label htmlFor="year">Vehicle Year</label>
          <Input {...register('year')} name='year' placeholder="Year" />
        </div>
        <div>
          <label htmlFor="make">Vehicle Make</label>
          <Input {...register('make')} name='make' placeholder="Make" />
        </div>
        <div>
          <label htmlFor="model">Vehicle Model</label>
          <Input {...register('model')} name='model' placeholder="Model" />
        </div>
        <div>
          <label htmlFor="color">Vehicle Color</label>
          <Input {...register('color')} name='color' placeholder="Color" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-pink-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CarForm