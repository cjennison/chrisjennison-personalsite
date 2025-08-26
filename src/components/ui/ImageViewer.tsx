"use client";

import { ActionIcon, Image, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconX } from "@tabler/icons-react";

interface ImageViewerProps {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  className?: string;
  radius?: number | string;
  fit?: "contain" | "cover" | "fill" | "scale-down";
  loading?: "lazy" | "eager";
  onClick?: () => void;
  description?: string;
}

export function ImageViewer({
  src,
  alt,
  width,
  height,
  className,
  radius = "md",
  fit = "cover",
  loading = "lazy",
  onClick,
  description,
}: ImageViewerProps) {
  const [opened, { open, close }] = useDisclosure(false);

  const handleImageClick = () => {
    onClick?.();
    open();
  };

  return (
    <>
      {/* Thumbnail Image */}
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-pointer transition-opacity hover:opacity-80 ${className || ""}`}
        radius={radius}
        fit={fit}
        loading={loading}
        onClick={handleImageClick}
      />

      {/* Modal for enlarged view */}
      <Modal
        opened={opened}
        onClose={close}
        size="90%"
        centered
        padding={0}
        withCloseButton={false}
        overlayProps={{
          opacity: 0.7,
          blur: 3,
        }}
        styles={{
          content: {
            background: "transparent",
            boxShadow: "none",
          },
          body: {
            padding: 0,
            position: "relative",
          },
        }}
      >
        {/* Close button - positioned relative to modal */}
        <ActionIcon
          variant="filled"
          color="dark"
          size="lg"
          onClick={close}
          aria-label="Close image viewer"
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            zIndex: 1000,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(4px)",
          }}
          styles={{
            root: {
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            },
          }}
        >
          <IconX size={20} color="white" />
        </ActionIcon>

        <div className="flex flex-col items-center">
          {/* Enlarged Image */}
          <Image
            src={src}
            alt={alt}
            fit="contain"
            className="max-h-[80vh] w-full"
            styles={{
              root: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
            }}
          />

          {/* Description text - below the image */}
          {description && (
            <div className="mt-4 px-4">
              <Text
                size="lg"
                className="text-center"
                c="white"
                style={{ textShadow: "0 1px 3px rgba(0, 0, 0, 0.8)" }}
              >
                {description}
              </Text>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
}
