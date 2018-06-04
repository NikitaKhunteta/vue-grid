export const utilMixin = {
    methods: {
        encrypt(data, key){
            var parsedData = data;
            if(data != null && typeof data === 'object' && Array.isArray(data) === false){
                parsedData = JSON.stringify(data);
            }
            return (parsedData+key).split("").reverse().join("");
        }
    }
};