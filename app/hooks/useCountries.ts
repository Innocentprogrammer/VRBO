interface City {
    value: string; // Unique identifier for the city
    label: string; // Name of the city
    state: string; // State the city belongs to
    latlng: [number, number]; // Latitude and Longitude
}

const cities: City[] = [
    // Delhi
    { value: 'DEL', label: 'Delhi', state: 'Delhi', latlng: [28.6139, 77.2090] },

    // Maharashtra
    { value: 'MUM', label: 'Mumbai', state: 'Maharashtra', latlng: [19.0760, 72.8777] },
    { value: 'PUN', label: 'Pune', state: 'Maharashtra', latlng: [18.5204, 73.8567] },
    { value: 'NAG', label: 'Nagpur', state: 'Maharashtra', latlng: [21.1458, 79.0882] },
    { value: 'NAS', label: 'Nashik', state: 'Maharashtra', latlng: [19.9975, 73.7898] },
    { value: 'SOL', label: 'Solapur', state: 'Maharashtra', latlng: [17.6599, 75.9064] },

    // Karnataka
    { value: 'BLR', label: 'Bangalore', state: 'Karnataka', latlng: [12.9716, 77.5946] },
    { value: 'MYS', label: 'Mysore', state: 'Karnataka', latlng: [12.2958, 76.6394] },
    { value: 'UDY', label: 'Udupi', state: 'Karnataka', latlng: [13.3400, 74.7435] },
    { value: 'MAL', label: 'Mangalore', state: 'Karnataka', latlng: [12.9141, 74.8560] },
    { value: 'DHV', label: 'Davangere', state: 'Karnataka', latlng: [14.4675, 75.9165] },

    // Uttar Pradesh
    { value: 'LKO', label: 'Lucknow', state: 'Uttar Pradesh', latlng: [26.8467, 80.9462] },
    { value: 'KAN', label: 'Kanpur', state: 'Uttar Pradesh', latlng: [26.4499, 80.3319] },
    { value: 'AGRA', label: 'Agra', state: 'Uttar Pradesh', latlng: [27.1767, 78.0081] },
    { value: 'VAR', label: 'Varanasi', state: 'Uttar Pradesh', latlng: [25.3216, 82.9876] },
    { value: 'PYG', label: 'Prayagraj', state: 'Uttar Pradesh', latlng: [25.4358, 81.8463] },
    {value: 'BRY', label: 'Bareilly', state: 'Uttar Pradesh', latlng: [28.3679, 79.4348]},


    // Uttarakhand
    { value: 'DEH', label: 'Dehradun', state: 'Uttarakhand', latlng: [30.3165, 78.0322] },
    { value: 'NAN', label: 'Nainital', state: 'Uttarakhand', latlng: [29.3803, 79.4549] },
    { value: 'HAR', label: 'Haridwar', state: 'Uttarakhand', latlng: [29.9457, 78.1642] },
    { value: 'RUD', label: 'Rudrapur', state: 'Uttarakhand', latlng: [28.9849, 79.1883] },
    { value: 'KOT', label: 'Kotdwar', state: 'Uttarakhand', latlng: [29.7648, 78.5305] },

    // Tamil Nadu
    { value: 'CHN', label: 'Chennai', state: 'Tamil Nadu', latlng: [13.0827, 80.2707] },
    { value: 'CBE', label: 'Coimbatore', state: 'Tamil Nadu', latlng: [11.0168, 76.9558] },
    { value: 'MAD', label: 'Madurai', state: 'Tamil Nadu', latlng: [9.9250, 78.1193] },
    { value: 'TRI', label: 'Trichy', state: 'Tamil Nadu', latlng: [10.7905, 78.7047] },
    { value: 'VEL', label: 'Vellore', state: 'Tamil Nadu', latlng: [12.9216, 79.1321] },

    // West Bengal
    { value: 'KOL', label: 'Kolkata', state: 'West Bengal', latlng: [22.5726, 88.3639] },
    { value: 'SIL', label: 'Siliguri', state: 'West Bengal', latlng: [26.7271, 88.3953] },
    { value: 'DURG', label: 'Durgapur', state: 'West Bengal', latlng: [23.5257, 87.3105] },
    { value: 'ASANSOL', label: 'Asansol', state: 'West Bengal', latlng: [23.6787, 86.9873] },
    { value: 'HOW', label: 'Howrah', state: 'West Bengal', latlng: [22.5891, 88.2632] },

    // Gujarat
    { value: 'AHM', label: 'Ahmedabad', state: 'Gujarat', latlng: [23.0225, 72.5714] },
    { value: 'SUR', label: 'Surat', state: 'Gujarat', latlng: [21.1702, 72.8311] },
    { value: 'VAD', label: 'Vadodara', state: 'Gujarat', latlng: [22.3072, 73.1812] },
    { value: 'RAJ', label: 'Rajkot', state: 'Gujarat', latlng: [22.3039, 70.8022] },
    { value: 'BHAV', label: 'Bhavnagar', state: 'Gujarat', latlng: [21.7646, 72.1500] },

    // Andhra Pradesh
    { value: 'VIZ', label: 'Visakhapatnam', state: 'Andhra Pradesh', latlng: [17.6869, 83.2185] },
    { value: 'VJA', label: 'Vijayawada', state: 'Andhra Pradesh', latlng: [16.5065, 80.6480] },
    { value: 'GNT', label: 'Guntur', state: 'Andhra Pradesh', latlng: [16.3067, 80.4365] },
    { value: 'TIR', label: 'Tirupati', state: 'Andhra Pradesh', latlng: [13.6288, 79.4192] },
    { value: 'KUR', label: 'Kurnool', state: 'Andhra Pradesh', latlng: [15.8281, 78.0344] },

    // Rajasthan
    { value: 'JPR', label: 'Jaipur', state: 'Rajasthan', latlng: [26.9124, 75.7873] },
    { value: 'UDA', label: 'Udaipur', state: 'Rajasthan', latlng: [24.5854, 73.7125] },
    { value: 'AJM', label: 'Ajmer', state: 'Rajasthan', latlng: [26.4530, 74.6399] },
    { value: 'JOD', label: 'Jodhpur', state: 'Rajasthan', latlng: [26.2389, 73.0248] },
    { value: 'BKN', label: 'Bikaner', state: 'Rajasthan', latlng: [28.0228, 73.3114] }
];

const useCities = () => {
    const getAll = () => cities;
    
    const getByValue = (value: string): City | undefined => {
        return cities.find((item) => item.value === value);
    }

    return {
        getAll,
        getByValue
    }
};

export default useCities;
