import React, { useCallback, useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
import { Cancel, UploadIcon } from "../../Assets/Svgs";
import { GButton } from "../Button/button";

export const GImageUpload = ({
  register,
  trigger,
  errors,
  files,
  setFiles,
}) => {
  const [touched, setTouched] = useState(false);
  const inputRef = useRef();

  const { ref: registerRef, ...rest } = register("files", {
    required: "Please upload a file",
    validate: () => validateFiles(files),
  });
  console.log("err", errors);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      const newFiles = [...e.dataTransfer.files];
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
      setTouched(true);
    },
    [setFiles]
  );

  const handleFileSelect = (e) => {
    const newFiles = [...e.target.files];
    setFiles((prevFiles) => [...prevFiles, ...newFiles]); // Update files state with selected files
    setTouched(true);
  };

  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((file, i) => i !== index));
  };

  const handleClick = () => {
    console.log(inputRef);
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  useEffect(() => {
    if (touched) {
      trigger();
    }
  }, [files, touched, trigger]);

  useEffect(() => {
    // Prevent default behavior for drag and drop
    const preventDefaults = (e) => {
      e.preventDefault();
      e.stopPropagation();
    };

    // Event listeners for drag and drop
    const dragArea = document.getElementById("drag-area");
    dragArea.addEventListener("dragenter", preventDefaults, false);
    dragArea.addEventListener("dragleave", preventDefaults, false);
    dragArea.addEventListener("dragover", preventDefaults, false);
    dragArea.addEventListener("drop", handleDrop, false);

    // Cleanup event listeners
    return () => {
      dragArea.removeEventListener("dragenter", preventDefaults);
      dragArea.removeEventListener("dragleave", preventDefaults);
      dragArea.removeEventListener("dragover", preventDefaults);
      dragArea.removeEventListener("drop", handleDrop);
    };
  }, [handleDrop]);

  return (
    <Container>
      <UploadBox id="drag-area" $isError={errors.files}>
        <UploadIcon />
        <UploadTxt>
          Click to upload <span>or drag and drop</span>
        </UploadTxt>
        <AcceptTxt>SVG, PNG, JPG or GIF (max. 800x400px)</AcceptTxt>
        <OrTxt>OR</OrTxt>
        <Input
          ref={(e) => {
            registerRef(e); // Register the input element
            inputRef.current = e; // Assign the input ref
          }}
          {...rest}
          type="file"
          multiple
          onChange={handleFileSelect}
          accept="image/* video/*"
        />
        <GButton
          type={"button"}
          label={"Browse files"}
          width={`160px`}
          onClick={handleClick}
        />
        {errors.files && <Error>{errors.files.message}</Error>}
      </UploadBox>
      {files.length > 0 && (
        <PreviewWrapper>
          <FileCount>{`${files.length} files uploaded`}</FileCount>
          <ImagesWrapper>
            {files.map((file, index) => (
              <PreviewImage key={index}>
                <CancelWrapper onClick={() => removeFile(index)}>
                  <Cancel />
                </CancelWrapper>
                {file?.type === "video" ? (
                  <Video src={URL.createObjectURL(file)} />
                ) : (
                  <Image src={URL.createObjectURL(file)} alt={file.name} />
                )}
              </PreviewImage>
            ))}
          </ImagesWrapper>
        </PreviewWrapper>
      )}
    </Container>
  );
};

// Custom validation function to check file size
const validateFiles = (files) => {
  if (!files || files.length === 0) return "Please upload a file";

  const maxSize = 1024 * 1024 * 10; // 10 MB
  const valid = Array.from(files).every((file) => file.size <= maxSize);

  if (!valid) return "File size exceeds the limit of 10MB";
};

const Container = styled.div``;

const UploadBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 28px 24px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: ${({ $isError }) =>
    $isError ? `1.5px dashed #d21f37` : `1.5px dashed #d0d5dd`};
  background: var(--Shade-White, #fff);
  transition: all 0.25s ease;

  & > button {
    font-family: "Termina Test";
  }
`;

const UploadTxt = styled.p`
  color: var(--Primary-500, #ff4623);
  font-family: "Termina Test";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 14.4px */
  margin: 16px 0 8px;

  & > span {
    color: var(--Grey-600, #475367);
    font-family: "Termina Test";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 14.4px */
  }
`;

const AcceptTxt = styled.p`
  color: var(--Grey-400, #98a2b3);
  font-family: "Termina Test";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 12px */
`;

const OrTxt = styled.p`
  color: var(--Grey-400, #98a2b3);
  font-family: "Termina Test";
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 14.4px */
  margin: 18px 0;
`;

const Input = styled.input`
  display: none;
`;

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
`;

const FileCount = styled.p`
  color: var(--Grey-400, #98a2b3);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 14.4px */
`;

const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
`;

const PreviewImage = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 128px;
  height: 128px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1.753px solid var(--Black-300, #626262);
  object-fit: cover;
`;

const Video = styled.video`
  width: 128px;
  height: 128px;
  flex-shrink: 0;
  border-radius: 2px;
  border: 1.753px solid var(--Black-300, #626262);
`;

const Error = styled.p`
  color: #d21f37;
  font-size: 14px;
  font-weight: 400;
  line-height: 120%;
  margin-top: 10px;
`;

const CancelWrapper = styled.div`
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  cursor: pointer;

  & > svg {
    width: 15px;
    height: 15px;
  }
`;
