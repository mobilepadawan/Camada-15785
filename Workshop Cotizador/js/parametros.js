const costoSeguroM2 = 28.75 //Variando este costo, el resto de los cálculos se ajustan automáticamente

// //Si agregamos nuevas localidades, definir el factor correspondiente a éstas en el JSON homónimo
const jsonAREA = [{"area": "CABA", "factor": 1.02}, 
                  {"area": "La Plata", "factor": 1.03},
                  {"area": "Tandil", "factor": 0.92}, 
                  {"area": "Costa Atlántica", "factor": 1.15}]

// //Si agregamos nuevos tipos de vivienda, definir el factor correspondiente a éstas en el JSON homónimo
const jsonTIPOVIVIENDA = [{"tipo": "Casa", "factor": 1.05},
                          {"tipo": "P.H.", "factor": 1.01},
                          {"tipo": "Edificio Departamento", "factor": 1.00},
                          {"tipo": "Barrio Privado", "factor": 1.12}]