//Variando este costo solamente, el resto de los cálculos se ajustan de forma automática
const costoSeguroM2 = 22.75
//Si agregamos nuevas localidades, debemos definir el factor correspondiente a éstas, en el JSON homónimo
const arrayResidencia = ["CABA", "La Plata", "Tandil", "Costa Atlántica"]
//Si agregamos nuevos tipos de vivienda, debemos definir el factor correspondiente a éstas, en el JSON homónimo
const arrayTipoVivienda = ["Casa", "P.H.", "Edificio Departamento", "Barrio Privado"]

const jsonAREA = [{"area": "CABA", "factor": 1.02}, 
                {"area": "La Plata", "factor": 1.03},
                {"area": "Tandil", "factor": 0.92}, 
                {"area": "Costa Atlántica", "factor": 1.15}]

const jsonTIPOVIVIENDA = [{"tipo": "Casa", "factor": 1.05},
                        {"tipo": "P.H.", "factor": 1.01},
                        {"tipo": "Edificio Departamento", "factor": 1.00},
                        {"tipo": "Barrio Privado", "factor": 1.12}]