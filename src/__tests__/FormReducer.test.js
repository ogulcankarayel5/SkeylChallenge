import {formConstants} from '../constants/form.constants'
import formReducer from '../context/formContext/FormReducer'
describe("Form reducer",() => {

    it("should return default state",() => {
        const newState=formReducer(undefined,{});
        expect(newState).toEqual([]);
    })

    it("should return new state if receiving type",() => {
        const values={loading:true}
        const newState=formReducer(undefined,{
            type:formConstants.SUBMIT_REQUEST,
            
        })
        expect(newState).toEqual(values);
    })
})