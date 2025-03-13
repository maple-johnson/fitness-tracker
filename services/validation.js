export function validateForm(data) {
    const errors = [];

    // Workout Type Validation
    if (data.woType === "none")
    {
        errors.push("Please select a workout option.")
    }
    else
    {
        const validOptions = ["run", "weights", "yoga", "bike", "other"];
        if (!validOptions.includes(data.woType))
        {
            errors.push("Spoofer no spoofing!");
        }
    }

    // Workout Duration Validation
    if (!data.woTime || data.woTime.trim() === "")
    {
        errors.push("Please include how long you worked out.")
    }
    else
    {
        const validOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        if (!validOptions.indexOf(data.woTime) === -1)
        {
            errors.push("Please include only a numerical value of how long you worked out.");
        }
    }

    // Workout Intensity Level Validation
    if (!data.woLevel || !data.woLevel === "low" || !data.woLevel === "medium" || !data.woLevel === "high")
    {
        if (!data.woLevel)
        {
            errors.push("Please select an option for workout intensity.");
        }
        else
        {
            errors.push("Spoofer no spoofing!");
        }
    }

    // Workout Date Validation
    if (!data.woDate)
    {
        errors.push("Please select a date");
    }

    // Workout Notes
        // Notes can be left empty, if there are no notes that day

    return {
        isValid: errors.length === 0,
        errors
    }
};