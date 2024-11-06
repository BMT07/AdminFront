import React, { useState } from 'react';
import { TextField, Button, Grid, Stepper, Step, StepLabel, Radio, RadioGroup, FormControlLabel, Select, MenuItem, InputLabel, FormControl, Typography } from '@mui/material';
import axios from 'axios';

const AddProduct = () => {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        productName: '',
        category: '',
        material: '',
        type: '',
        description: '',
        dimension1: { name: '', price: 0 },
        dimension2: { name: '', price: 0 },
        dimension3: { name: '', price: 0 },
        time1: '',
        time2: '',
        time3: '',
        personaliser: '',
    });

    const [photo, setPhoto] = useState(null);

    const handlePhotoChange = (e) => {
        setPhoto(e.target.files[0]);
    };
    const steps = ['Photo, Nom, Catégorie', 'Matériau, Type, Description', 'Dimensions', 'Temps de livraison', 'Personnalisation'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/produit/addProduit', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.error('Erreur lors de l’ajout du produit:', error);
        }

    };

    const renderStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return (
                    <div>
                        <TextField type="file" name="photo" onChange={handlePhotoChange} />

                        <TextField
                            label="Nom du produit"
                            name="productName"
                            value={formData.productName}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Catégorie</InputLabel>
                            <Select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <MenuItem value="beauty">Beauté</MenuItem>
                                <MenuItem value="decor">Décoration</MenuItem>
                                <MenuItem value="accessory">Accessoire</MenuItem>
                                <MenuItem value="games">Jeux</MenuItem>
                                <MenuItem value="autres">Autres</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                );
            case 1:
                return (
                    <div>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Matériau</InputLabel>
                            <Select
                                name="material"
                                value={formData.material}
                                onChange={handleChange}
                            >
                                <MenuItem value="wood">Bois</MenuItem>
                                <MenuItem value="olive wood">Bois d'olive</MenuItem>
                                <MenuItem value="glass">Verre</MenuItem>
                                <MenuItem value="plastic">Plastique</MenuItem>
                                <MenuItem value="autres">Autres</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <InputLabel>Type</InputLabel>
                            <Select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                            >
                                <MenuItem value="traditionnal">Traditionnel</MenuItem>
                                <MenuItem value="modern">Moderne</MenuItem>
                                <MenuItem value="mix">Mix</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            label="Description du produit"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                        />
                    </div>
                );
            case 2:
                return (
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="dimension 1"
                                    name="dimension1.name"
                                    value={formData.dimension1.name}
                                    onChange={(e) => setFormData({ ...formData, dimension1: { ...formData.dimension1, name: e.target.value } })}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Prix"
                                    name="dimension1.price"
                                    type="number"
                                    value={formData.dimension1.price}
                                    onChange={(e) => setFormData({ ...formData, dimension1: { ...formData.dimension1, price: e.target.value } })}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="dimension 2"
                                    name="dimension2.name"
                                    value={formData.dimension2.name}
                                    onChange={(e) => setFormData({ ...formData, dimension2: { ...formData.dimension2, name: e.target.value } })}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Prix"
                                    name="dimension2.price"
                                    type="number"
                                    value={formData.dimension2.price}
                                    onChange={(e) => setFormData({ ...formData, dimension2: { ...formData.dimension2, price: e.target.value } })}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>

                            <Grid item xs={12} md={4}>
                                <TextField
                                    label="dimension 3"
                                    name="dimension3.name"
                                    value={formData.dimension3.name}
                                    onChange={(e) => setFormData({ ...formData, dimension3: { ...formData.dimension3, name: e.target.value } })}
                                    fullWidth
                                    margin="normal"
                                />
                                <TextField
                                    label="Prix"
                                    name="dimension3.price"
                                    type="number"
                                    value={formData.dimension3.price}
                                    onChange={(e) => setFormData({ ...formData, dimension3: { ...formData.dimension3, price: e.target.value } })}
                                    fullWidth
                                    margin="normal"
                                />
                            </Grid>
                        </Grid>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <TextField
                            label="temps(1->5 pieces)"
                            name="time1"
                            type="number"
                            value={formData.time1}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="temps(5->10 pieces)"
                            name="time2"
                            type="number"
                            value={formData.time2}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="temps(10->15 pieces)"
                            name="time3"
                            type="number"
                            value={formData.time3}
                            onChange={handleChange}
                            fullWidth
                            margin="normal"
                        />
                    </div>
                );
            case 4:
                return (
                    <div>
                        <RadioGroup
                            name="personaliser"
                            value={formData.personaliser}
                            onChange={handleChange}
                        >
                            <FormControlLabel value="yes" control={<Radio />} label="Oui" />
                            <FormControlLabel value="no" control={<Radio />} label="Non" />
                        </RadioGroup>
                    </div>
                );
            default:
                return <div>Erreur ! Étape inconnue.</div>;
        }
    };

    return (
        <div style={{ maxWidth: '600px', margin: 'auto' }}>
            <Stepper activeStep={step} alternativeLabel>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>

            <form onSubmit={handleSubmit}>
                {renderStepContent(step)}

                <div style={{ marginTop: '20px' }}>
                    {step > 0 && (
                        <Button onClick={prevStep} variant="contained" color="primary" style={{ marginRight: '10px' }}>
                            Précédent
                        </Button>
                    )}
                    {step < steps.length - 1 ? (
                        <Button onClick={nextStep} variant="contained" color="primary">
                            Suivant
                        </Button>
                    ) : (
                        <Button type="submit" variant="contained" color="primary">
                            Soumettre
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default AddProduct;
