
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [NgIf],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {
  previewImage: string | null = null;
  selectedFile: File | null = null;
  isUploading = false;
  uploadSuccess = false;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.selectedFile = input.files[0];

      // Show preview
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewImage = e.target?.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  uploadFile() {
    if (!this.selectedFile) return;

    this.isUploading = true;
    this.uploadSuccess = false;

    // Simulating an upload
    setTimeout(() => {
      this.isUploading = false;
      this.uploadSuccess = true;
    }, 2000);
  }

  uploadAnother() {
    this.previewImage = null;
    this.selectedFile = null;
    this.uploadSuccess = false;
  }

  removeSelectedImage() {
    this.previewImage = null;
    this.selectedFile = null;
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    if (event.dataTransfer?.files.length) {
      this.onFileSelected({ target: { files: event.dataTransfer.files } } as unknown as Event);
    }
  }
}
