SIGN YOUR WAY — AUTOMATIC WORD RECOGNITION UPDATE

This package keeps the existing Sign Your Way site and replaces its model files with the newer uploaded Colab exports.

MODEL FOLDERS (do not rename):
- models/asl/model.onnx + labels.json = ASL WLASL word model (50 labels)
- models/isl/model.onnx + labels.json = ISL word model (19 labels)

The Communicate dropdown must be set to “Words” for automatic word recognition. “Letters” remains the existing letter-recognition mode. The “Teach an additional custom word” panel is optional and is only for adding words outside the built-in model vocabulary.

DEPLOY TO VERCEL:
1. Extract this ZIP. Open the signbridge-main folder.
2. Replace the files in your GitHub/Vercel project with the contents of that folder (keep the folder contents at the project root, not one folder deeper).
3. Confirm that these URLs return files, not 404 pages:
   /models/asl/labels.json
   /models/asl/model.onnx
   /models/isl/labels.json
   /models/isl/model.onnx
4. Commit and push to the same GitHub repository connected to Vercel. Wait for deployment to finish.
5. Open the site, hard-refresh (Ctrl+Shift+R), choose ASL or ISL, choose Words, and start the camera.

VALIDATION NOTES:
- ASL report: 50 classes, 434 train / 179 test, reported accuracy 43.6%. Treat predictions cautiously; this is a limited prototype.
- ISL report: 19 classes, 899 train / 301 test, reported accuracy 97.7%. The notebook used each video filename as the “signer” group, so this split may not separate real signers; the reported score may be optimistic and must not be presented as reliable real-world accuracy.
- This recognises isolated words in the trained vocabulary, not unrestricted continuous sign-language sentences.

The browser inference uses ONNX Runtime Web. The model expects a 30-frame sequence of 126 hand-landmark features, matching the supplied training notebook.
