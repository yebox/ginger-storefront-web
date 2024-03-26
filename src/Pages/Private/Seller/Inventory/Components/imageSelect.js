import { Add } from '@mui/icons-material'
import styled from 'styled-components'
import { useState } from 'react';
import { useRef, useEffect } from 'react';

export const ImageSelect = ({
    register,
    trigger,
    errors,
    files,
    setFiles
}) => {

    const [touched, setTouched] = useState(false)
    const inputRef = useRef()



    const { ref: registerRef, ...rest } = register("files", {
        required: "Please upload a file",
        validate: () => validateFiles(files),
    });

    const handleFileSelect = (e) => {
        console.log(e.target.files, "target")
        const newFiles = [...e.target.files];
        setFiles((prevFiles) => [...prevFiles, ...newFiles]); // Update files state with selected files
        setTouched(true);
    };

    const removeFile = (index) => {
        setFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
    };

    useEffect(() => {
        if (touched) {
            trigger();
        }
    }, [files, touched, trigger]);


    const validateFiles = (files) => {
        if (!files || files.length === 0) return "Please upload a file";

        const maxSize = 1024 * 1024 * 10; // 10 MB
        const valid = Array.from(files).every((file) => file.size <= maxSize);

        if (!valid) return "File size exceeds the limit of 10MB";
    };

    return (
        <Container>
            <RequestAdd>
                <AddContainer>
                    <Add />
                </AddContainer>

                <Input
                    ref={(e) => {
                        registerRef(e)
                        inputRef.current = e
                    }}
                    {...rest}
                    type={"file"}
                    onChange={handleFileSelect}
                    accept={"image/*"}
                />
            </RequestAdd>

            {files.map((file, index) => (
                <Preview key={index} src={URL.createObjectURL(file)} alt={`Preview ${index}`} />
            ))}

        </Container>
    )
}


const Container = styled.div`
    position: relative;
    width: 80%;
    border-radius: 2px;
    border: 1px solid var(--gray-200);
    height: 57px;
    border-style: dotted;
    display: flex;
    align-items: center;
    justify-content: center;
    border-spacing: 8px;

`

const Input = styled.input`
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`

const RequestAdd = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const AddContainer = styled.div`
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`
const Preview = styled.img`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 3;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`