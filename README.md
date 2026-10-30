# Recognition pipeline (one model per language; never share weights between ASL and ISL)
1. Get data, check each licence: WLASL (ASL isolated words), INCLUDE / ISL-CSLTR / ISLRTC material (ISL). Record your own with consent if short.
2. Write `manifest.csv` (path,label,signer) for ONLY your chosen vocabulary.
3. `python extract_landmarks.py manifest_asl.csv data/asl` and the same for ISL.
4. `python train.py data/asl/data.npz models/asl`. Check `eval_report.json`. Report per-sign accuracy, number of held-out signers, and failures.
5. Browser: run `model.onnx` with onnxruntime-web. Feature extraction there MUST match `norm()` above (wrist-relative, max-abs scaled, 30-frame resample, 126 features, Left hand first). Mismatch = silently bad predictions.
Small datasets (<~20 clips/sign, <~10 signers) will not generalise; say so in your report.
