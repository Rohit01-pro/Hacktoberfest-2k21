package tax_calculator;
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;

public class tax_calculator extends JFrame
{
   /**
    * The {@code income calculator}
    * @author chaitra. A C
	 * @since 6/7/21
	 */
	private static final long serialVersionUID = 1L;
private JLabel label1, label2, label3;
   private JTextField netincome,ITsavings,Tax; 
   private JPanel ppanel,spanel,tpanel;


   public tax_calculator()
   {
      setTitle("incomeTax Calculator");
      setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

      label1 = new JLabel("netincome : ");
      label2 = new JLabel("ITsavings : ");
      label3 = new JLabel("Tax:");

      netincome = new JTextField("0.0", 15);
      netincome.setEditable(true);
      
      ITsavings = new JTextField("0.0", 15);
      ITsavings.setEditable(true);

	  JButton butt = new JButton("Calculate");
//	  butt.setPreferredSize(new Dimension(0,0));
	  butt.addActionListener(new ActionListener() {
	      public void actionPerformed(ActionEvent e) {
	        String numberStr1 = netincome.getText();
	        String numberStr2 = ITsavings.getText();
	        double tax=0.0;
	        numberStr1 = numberStr1.trim();
	        numberStr1 = numberStr1.trim();
	        double n = Double.parseDouble(numberStr1);
	        double s = Double.parseDouble(numberStr2);
	        double TaxableIncome=n-s;
	        if(TaxableIncome>150000 && TaxableIncome<250000) {
	        	 tax=TaxableIncome*0.1;
	 	        Tax.setText(String.format("%.2f", tax));

	        }
	        if(TaxableIncome>250000 && TaxableIncome<500000) {
	        	 tax=TaxableIncome*0.2;
	 	        Tax.setText(String.format("%.2f", tax));

	        }
	        if(TaxableIncome>500000) {
	        	 tax=TaxableIncome*0.3;
	 	        Tax.setText(String.format("%.2f", tax));
	        }
	        else {
		        Tax.setText("No Tax,enjoy!!");

	        }
	        
	      }
	    });
	  

     
      Tax = new JTextField("0.0", 15);
      Tax.setEditable(false);

      ppanel = new JPanel();
      ppanel.add(label1);
      ppanel.add(netincome);


      
      spanel = new JPanel();
      spanel.add(label2);
      spanel.add(ITsavings);
      
      tpanel = new JPanel();
      tpanel.add(label3);
      tpanel.add(Tax);
      
      setLayout(new GridLayout(5,4));

      add(ppanel);
      new JLabel("<html><body><p style='margin-top:-5'>");
      add(spanel);
      add(butt, BorderLayout.CENTER);
	    setDefaultCloseOperation(EXIT_ON_CLOSE);
	    pack();
      add(tpanel);


      pack();
      setVisible(true);
   }

 
  

   public static void main(String[] args)
   {
      new tax_calculator();
   }
}
